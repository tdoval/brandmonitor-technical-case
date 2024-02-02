package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
)

type RespostaGoogle struct {
	Localidade    string `json:"localidade"`
	Frequencia    int    `json:"frequencia"`
	PalavrasChave string `json:"palavrasChave"`
	CodigoStatus  int    `json:"codigoStatus"`
	CorpoResposta string `json:"corpoResposta"`
}

func simulateGoogleSearch(location string, frequency int, keywords string) RespostaGoogle {
	fmt.Printf("Simulando pesquisa no Google com os seguintes parâmetros:\n")
	fmt.Printf("Localidade: %s\n", location)
	fmt.Printf("Frequência: %d\n", frequency)
	fmt.Printf("Palavras-chave: %s\n", keywords)

	apiURL := "https://cse.google.com/cse?cx=a4823638e4af341f2"
	apiKey := os.Getenv("GOOGLE_API_KEY")
	customSearchEngineID := "a4823638e4af341f2"

	queryURL := fmt.Sprintf("%s?key=%s&cx=%s&q=%s&num=%d", apiURL, apiKey, customSearchEngineID, "ExemploPesquisa", frequency)

	// chamada HTTP simulada
	resp, err := http.Get(queryURL)
	if err != nil {
		fmt.Println("Erro na chamada simulada à API do Google:", err)
		return RespostaGoogle{}
	}
	defer resp.Body.Close()

	fmt.Printf("Código de Status: %d\n", resp.StatusCode)

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Erro ao ler o corpo da resposta:", err)
	} else {
		fmt.Printf("Corpo da Resposta: %s\n", body)
	}

	resposta := RespostaGoogle{
		Localidade:    location,
		Frequencia:    frequency,
		PalavrasChave: keywords,
		CodigoStatus:  resp.StatusCode,
		CorpoResposta: string(body),
	}

	return resposta

}

func main() {
	router := gin.Default()

	router.GET("/search", func(c *gin.Context) {
		location := c.Query("location")
		frequencyStr := c.Query("frequency")
		keywords := c.Query("keywords")

		if location == "" || frequencyStr == "" {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Localidade e Frequência são obrigatórios",
			})
			return
		}

		frequency, err := strconv.Atoi(frequencyStr)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Frequência deve ser um número inteiro",
			})
			return
		}

		resposta := simulateGoogleSearch(location, frequency, keywords)

		fmt.Println("Simulação de pesquisa bem-sucedida")

		c.JSON(http.StatusOK, resposta)
	})

	router.Run(":8080")
}
