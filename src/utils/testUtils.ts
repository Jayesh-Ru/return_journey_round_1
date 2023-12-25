export const randomIdGenerator = () =>{
    const allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];

    const getRandomSubset = (array: number[], count: number): number[] => {
      const shuffled = array.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    };
    
    const randomSubset: number[] = getRandomSubset(allNumbers, 3);
    return randomSubset;
}

export const randomProductsGenerator = () =>{
    const demoProduct = {
        id: 1,
        name: 'Test Product',
        price: 19.99,
      };
      
      const products : typeof demoProduct[]= Array.from({ length: 10 }, (_, index) => ({
        ...demoProduct,
        id: demoProduct.id + index,
        name: `Product ${index + 1}`, // Unique name for each object
        price: demoProduct.price + (index * 5), // Unique price for each object
      }));
      return products;
}
