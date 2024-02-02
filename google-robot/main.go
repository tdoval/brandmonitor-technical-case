package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
)

func simulateGoogleSearch(location string, frequency int, keywords []string) {
	fmt.Printf("Simulando pesquisa no Google com os seguintes parâmetros:\n")
	fmt.Printf("Localidade: %s\n", location)
	fmt.Printf("Frequência: %d\n", frequency)
	fmt.Printf("Palavras-chave: %v\n", keywords)

	apiURL := "https://cse.google.com/cse?cx=a4823638e4af341f2"
	apiKey := os.Getenv("GOOGLE_API_KEY")
	customSearchEngineID := "a4823638e4af341f2"

	queryURL := fmt.Sprintf("%s?key=%s&cx=%s&q=%s&num=%d", apiURL, apiKey, customSearchEngineID, "ExemploPesquisa", frequency)

	// chamada HTTP simulada
	resp, err := http.Get(queryURL)
	if err != nil {
		fmt.Println("Erro na chamada simulada à API do Google:", err)
		return
	}
	defer resp.Body.Close()

	fmt.Printf("Código de Status: %d\n", resp.StatusCode)

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Erro ao ler o corpo da resposta:", err)
	} else {
		fmt.Printf("Corpo da Resposta: %s\n", body)
	}
	// Aqui, você pode processar o corpo da resposta se necessário

}

func main() {
	router := gin.Default()

	router.GET("/search", func(c *gin.Context) {
		// Obtenha os parâmetros da consulta da solicitação
		location := c.Query("location")
		frequencyStr := c.Query("frequency")
		keywords := c.QueryArray("keywords")

		// Verifique se os parâmetros obrigatórios estão presentes
		if location == "" || frequencyStr == "" {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Localidade e Frequência são obrigatórios",
			})
			return
		}

		// Converta a string frequency para um tipo int
		frequency, err := strconv.Atoi(frequencyStr)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Frequência deve ser um número inteiro",
			})
			return
		}

		// Lógica para simular pesquisa no Google
		simulateGoogleSearch(location, frequency, keywords)

		// Exemplo: Imprimir a mensagem de pesquisa bem-sucedida
		fmt.Println("Simulação de pesquisa bem-sucedida")

		// Responda com sucesso
		c.JSON(http.StatusOK, gin.H{
			"message": "Pesquisa bem-sucedida",
		})
	})

	// Inicie o servidor na porta 8080
	router.Run(":8080")
}
