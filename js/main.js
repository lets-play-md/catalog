const catalogItems = [
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
    {
        main_photo_path: 'img/dummy-picture.jpg',
        slides: [
            'img/dummy-picture.jpg',
            'img/dummy-picture-2.jpg',
        ],
        short_description: 'Dummy description',
        description: 'Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy descriptionDummy description Dummy description Dummy description Dummy description Dummy description',
        per_hour: 50,
        per_day: 100
    },
];

let loadCatalog = function () {
    let catalog = '';
    let catalogItemTemplate = document.getElementById('catalog-item').innerHTML;
    catalogItems.forEach(function (catalogItem, index) {
        catalog += catalogItemTemplate
            .replace(/{{catalog_item_id}}/g, `${index}`)
            .replace(/{{main_photo_path}}/g, catalogItem.main_photo_path)
            .replace(/{{short_description}}/g, catalogItem.short_description)
            .replace(/{{per_hour}}/g, catalogItem.per_hour)
            .replace(/{{per_day}}/g, catalogItem.per_day);
    });

    document.getElementById('catalog').innerHTML = catalog;
};

let openModalCatalogItem = function () {
    const catalogItemIndex = this.getAttribute('id');
    const catalogItem = catalogItems[catalogItemIndex];
    let modalCatalogItemTemplate = document.getElementById('modal-catalog-item').innerHTML;
    const modal = document.getElementById('modal');

    let slides = '';
    let slideTemplate = document.getElementById('modal-catalog-item-slide').innerHTML;
    catalogItem.slides.forEach((slide) => slides += slideTemplate.replace(/{{slide}}/g, slide));

    modal.querySelector('.catalog-item-wrapper').innerHTML = modalCatalogItemTemplate
        .replace(/{{main_photo_path}}/g, catalogItem.main_photo_path)
        .replace(/{{slides}}/g, slides)
        .replace(/{{description}}/g, catalogItem.description)
        .replace(/{{per_hour}}/g, catalogItem.per_hour)
        .replace(/{{per_day}}/g, catalogItem.per_day);

    modal.parentElement.classList.remove('hidden');

    showSlides(slideIndex);
};

let closeModalCatalogItem = function () {
    const modal = document.getElementById('modal');
    modal.parentElement.classList.add('hidden');
    modal.querySelector('.catalog-item-wrapper').innerHTML = '';
};

document.addEventListener('DOMContentLoaded', function () {
    loadCatalog();

    document
        .getElementById('modal-close')
        .addEventListener('click', closeModalCatalogItem);

    Array
        .from(document.getElementsByClassName('catalog-item'))
        .forEach((catalogItem) => catalogItem.addEventListener('click', openModalCatalogItem));
});