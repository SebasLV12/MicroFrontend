export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: 'juego 1',
      price: 5.99,
      description: 'Ruleta rusa divertida1',
      image: 'http://localhost:8080/game-1.jpg'
    },
    {
        id: 2,
        name: 'juego 2',
        price: 5.99,
        description: 'Ruleta rusa divertida2',
        image: 'http://localhost:8080/game-2.jpg'
      }, 
      {
      id: 3,
      name: 'juego 3',
      price: 5.99,
      description: 'Ruleta rusa divertida3',
      image: 'http://localhost:8080/game-3.jpg'
    }, 
    {
        id: 4,
        name: 'juego 4',
        price: 5.99,
        description: 'Ruleta rusa divertida4',
        image: 'http://localhost:8080/game-4.jpg'
      },
      {
        id: 5,
        name: 'juego 5',
        price: 5.99,
        description: 'Ruleta rusa divertida5',
        image: 'http://localhost:8080/game-5.jpg'
      },
      {
        id: 6,
        name: 'juego 6',
        price: 5.99,
        description: 'Ruleta rusa divertida6',
        image: 'http://localhost:8080/game-6.jpg'
      }
  ];
  
  export default products;