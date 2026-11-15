# Bookafé · Cardápio digital

Cardápio digital do Bookafé, cafeteria em Nhandeara-SP (desde 2011), "Livros que levam à fé".

O cliente escolhe os itens, vê o subtotal de cada produto e o total, paga com **Pix (QR Code com o valor já preenchido)** e o pedido chega pronto no **WhatsApp do Bookafé**.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O cardápio (o que o cliente vê) |
| `qr-mesas.html` | Gera e imprime um QR Code por mesa. Cada QR abre o cardápio com o número da mesa já preenchido |
| `qr-mesas.pdf` | Pronto para imprimir: Balcão + Mesas 1 a 10, 6 por folha A4 (2 folhas) |

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

### Pagar para o atendente (cartão ou dinheiro)

Quem não quer pagar com Pix escolhe **"Chamar atendente na mesa"** e marca **cartão de débito, cartão de crédito ou dinheiro** (no dinheiro, pode dizer para quanto precisa de troco). O WhatsApp recebe, por exemplo: `Pagamento: IR ATÉ A MESA 7 para receber em cartão de débito (levar a maquininha)`. Em pedidos de retirada, a opção vira "Pagar no balcão".

## QR Codes das mesas

O Bookafé tem **10 mesas** (mude `mesas: 10` na área de edição se isso mudar). Os QR apontam para `https://km097755-cpu.github.io/bookafe/?mesa=N`.

1. Ligue o GitHub Pages do repositório (Settings → Pages → branch `main`, pasta `/root`). Sem isso os QR não abrem nada.
2. Imprima `qr-mesas.pdf`, recorte e cole cada QR na mesa do mesmo número.
3. Mudou o número de mesas ou o endereço? Abra `qr-mesas.html`, ajuste e clique em **Imprimir**.
