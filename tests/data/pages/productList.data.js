export const PRODUCTLISTPAGE = {

    locators: {
        productsTable: '.search-products',
        productData: "[data-product-position='@id@']",
        productDataPosition: '[data-product-position]',
        productDetailsLink: '[href]',
        tableBookAuthor: '.authors',
        tableBookLanguage: '.product-language > span:nth-child(3)',
        tableBookLanguageFlag: '.icon.language-flag',
        cartTable: '#product-line-@id@',
        tableBookActivePrice: '.active-price'
    }

};