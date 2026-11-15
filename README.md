# Bookafé · Cardápio digital

Cardápio digital do Bookafé, cafeteria em Nhandeara-SP (desde 2011), "Livros que levam à fé".

O cliente escolhe os itens e envia o pedido para o **WhatsApp do Bookafé**, sem pagar na hora. Tudo o que ele pede entra em **Minha conta**. No final, ele fecha a conta e paga com **Pix (QR Code com o valor já preenchido)** ou chama o atendente para pagar com cartão ou dinheiro.

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
5. Quando estiver tudo certo, troque `emAtualizacao: true` por `emAtualizacao: false`.

### Modo "em atualização"

Enquanto `emAtualizacao: true`, o cliente vê o aviso **"Cardápio em atualização"** com o link do Instagram, **os preços ficam escondidos** e **os pedidos ficam pausados** (os botões de adicionar somem). Para a equipe testar os pedidos nesse período, abra o endereço com `?teste=1` no final, por exemplo `https://km097755-cpu.github.io/bookafe/?teste=1&mesa=3`.

## Como o pedido e o pagamento funcionam (importante)

1. **Pedir:** o cliente monta o pedido, informa o nome e a mesa e toca em **"Enviar pedido"**. O WhatsApp recebe `MESA 4 · ANA`, os itens, o total do pedido e quanto a conta soma até agora. Ninguém paga nesse momento.
2. **Minha conta:** cada pedido enviado fica guardado no celular do cliente. Ele pode pedir quantas vezes quiser; a barra de baixo mostra o total da conta.
3. **Fechar a conta:** quando terminar, o cliente abre **Minha conta**, confere tudo o que pediu e escolhe como pagar:
   - **Pix agora:** aparece o QR Code no padrão do Banco Central, com o valor exato da conta e um identificador (ex.: `BKF4K9Z2Q`). Depois de pagar, ele toca em "Já paguei".
   - **Chamar atendente na mesa:** cartão de débito, cartão de crédito ou dinheiro (no dinheiro, pode dizer para quanto precisa de troco). Em pedidos de retirada, a opção vira "Pagar no balcão".
4. O WhatsApp recebe `FECHAR CONTA · MESA 4 · ANA`, com todos os pedidos, o total e a forma de pagamento (ex.: `IR ATÉ A MESA 4 para receber em cartão de débito (levar a maquininha)`).

Limites para a equipe saber:

- **A página não tem como saber sozinha se o Pix caiu.** Confira no app do banco se entrou um Pix com aquele valor e identificador. Confirmação automática exige um intermediador de pagamento e um pequeno servidor.
- **A conta fica no celular do cliente.** Se ele pedir algo de boca, ou trocar de celular, isso não aparece no fechamento. A comanda da loja é quem manda.
- Uma conta esquecida no celular some sozinha depois de 12 horas.

## QR Codes das mesas

O Bookafé tem **10 mesas** (mude `mesas: 10` na área de edição se isso mudar). Os QR apontam para `https://km097755-cpu.github.io/bookafe/?mesa=N`.

1. Ligue o GitHub Pages do repositório (Settings → Pages → branch `main`, pasta `/root`). Sem isso os QR não abrem nada.
2. Imprima `qr-mesas.pdf`, recorte e cole cada QR na mesa do mesmo número.
3. Mudou o número de mesas ou o endereço? Abra `qr-mesas.html`, ajuste e clique em **Imprimir**.
