# Bookafé · Cardápio digital

Cardápio digital do Bookafé, cafeteria em Nhandeara-SP (desde 2011), "Livros que levam à fé".

O cliente escolhe os itens, vê o subtotal de cada produto e o total, paga com **Pix (QR Code com o valor já preenchido)** e o pedido chega pronto no **WhatsApp do Bookafé**.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O cardápio (o que o cliente vê) |
| `qr-mesas.html` | Gera e imprime um QR Code por mesa. Cada QR abre o cardápio com o número da mesa já preenchido |

Não precisa instalar nada: abra com duplo clique no navegador. Funciona sem internet (só as fontes vêm da internet).

## Como deixar com os dados de verdade

Abra `index.html` no Bloco de Notas. Logo no começo tem a **ÁREA DE EDIÇÃO**:

1. `whatsapp`: número que recebe os pedidos (55 + DDD + número, só dígitos).
2. `pix.chave`: sua chave Pix. Confira também `pix.nome` e `pix.cidade`.
3. `endereco`, `horario`, `livros`: os textos da loja.
4. `CARDAPIO`: categorias, itens e preços (preço com ponto: `9.50`). Item que acabou: `esgotado: true`.
5. Quando estiver tudo certo, troque `rascunho: true` por `rascunho: false`.

## Como o pagamento funciona (importante)

- O QR Code Pix é gerado no padrão do Banco Central, com o valor exato do pedido e um identificador (ex.: `BKF4K9Z2Q`).
- Depois de pagar, o cliente toca em **"Já paguei"** e o pedido vai para o WhatsApp com o total e o identificador.
- **A página não tem como saber sozinha se o Pix caiu.** Antes de preparar, confira no app do banco se entrou um Pix com aquele valor e identificador. Confirmação automática exige um intermediador de pagamento (Mercado Pago, Asaas, PagSeguro etc.) e um pequeno servidor; fica como próximo passo.

## QR Codes das mesas

1. Publique o cardápio (GitHub Pages, por exemplo) para ter um endereço público.
2. Abra `qr-mesas.html`, cole o endereço, escolha o número de mesas e clique em **Imprimir** (6 por folha A4).
