

const INGREDIENTS = [
    {
        id: 'ing-1',
        name: 'bun',
        isQuantityFixed: true,
        default_quantity: 2,
        price: 2,
        
    },
    {
        id: 'ing-2',
        name: 'salad',
        isQuantityFixed: false,
        default_quantity: 0,
        max_quantity: 1,
        price: 5, 
    },
    {
        id: 'ing-3',
        name: 'cheese slices',
        isQuantityFixed: false,
        default_quantity: 0,
        price: 1,
        
    },
    {
        id: 'ing-4',
        name: 'cutlets',
        isQuantityFixed: false,
        default_quantity: 0,
        price: 2,
        
    }
];

export default INGREDIENTS;

// Name or guy who order
// Bun = 2 (fix price Rs 5 each bun and fix quantity 2 user can not edit the bun quantity)
// salad = yes or no (price Rs 5 , it should be boolean)
// Cheese Slices = (Rs 1 per slice)
// cutlets = (Rs 2 per piece)