export const PRODUCTCARTPAGE = {

    labels: {
        searchInputBox: 'texto para pesquisa',
        searchInputButton: 'pesquisar',
        isbnText: 'ISBN:',
        addToCartButton: 'Comprar',
        emptyMessage: 'O cesto de compras está vazio.'
    },

    locators: {
        cartItemsCount: '#cart-button',
        cartTable: '#product-line-@item@',
        cartOverlay: '.cartoverlay',
        plusButton: '.qtdplus',
        minusButton: '.qtdminus',
        quantityInputBox: '.qtd',
        trashButton: '.icon-trash',
        emptyMessage: '.empty-info'
    }

};