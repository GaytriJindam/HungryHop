// utils/helpers.ts

export type FoodItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  
  /**
   * Mock function to simulate fetching food items from an API or database.
   * @returns {Promise<FoodItem[]>} A promise resolving to an array of food items.
   */
  export async function fetchFoodItems(): Promise<FoodItem[]> {
    // Simulate a delay for fetching data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Classic cheese and tomato pizza.',
            price: 12.99,
            image: 'https://img.freepik.com/free-photo/mixed-pizza-sausages-chicken-arugula-olives-cheese-pepper-top-view_141793-2398.jpg?t=st=1734899628~exp=1734903228~hmac=ca0b815ffa93b71c2655aa98cc8980fe5983d7e5639532974e87a6229665a7bd&w=2000',
          },
          {
            id: 2,
            name: 'Cheeseburger',
            description: 'Juicy burger with cheddar cheese.',
            price: 10.99,
            image: 'https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg',
          },
          {
            id: 3,
            name: 'Caesar Salad',
            description: 'Crisp romaine lettuce with Caesar dressing.',
            price: 8.99,
            image: 'https://as2.ftcdn.net/v2/jpg/02/02/48/35/1000_F_202483549_3cDh8uaQ5OJG9GUDsp9YKSQNt69rjucc.jpg',
          },
          {
            id: 4,
            name: 'Spaghetti Carbonara',
            description: 'Creamy pasta with pancetta and Parmesan.',
            price: 14.99,
            image: 'https://as2.ftcdn.net/v2/jpg/02/51/64/53/1000_F_251645371_gxfwVzv11OwLIpBtl7iATtAz045vSr1y.jpg',
          },
          {
            id: 5,
            name: 'Veg Biryani',
            description: 'Aromatic basmati rice cooked with fresh vegetables, herbs, and flavorful spices.',
            price: 8.99,
            image: 'https://www.terrafood.co.in/cdn/shop/files/VegBiryani.jpg?v=1687766592',
          },
          {
            id: 6,
            name: 'Chicken Soup',
            description: 'A hearty soup made with tender chicken, fresh vegetables, and flavorful broth.',
            price: 14.99,
            image: 'https://as1.ftcdn.net/v2/jpg/03/09/36/94/1000_F_309369457_LobjKeN75Yb0LA5iH9lbf0lbbu3tnEXy.jpg',
          },
          {
            id: 7,
            name: 'Mutton Biryani',
            description: 'Fragrant basmati rice cooked with tender mutton and a blend of aromatic spices.',
            price: 12.99,
            image: 'https://as1.ftcdn.net/v2/jpg/08/78/55/62/1000_F_878556227_VqJD70C039dqhHlaC9KUoHZhJNN4A1rG.jpg',
          },
          {
            id: 8,
            name: 'Fish Fry',
            description: 'Crispy fried fish seasoned with a flavorful blend of spices.',
            price: 10.99,
            image: 'https://as1.ftcdn.net/v2/jpg/06/51/75/86/1000_F_651758611_QgVhLZWFhGJLdyHylonKr2zGvhRVkBgy.jpg',
          },
          
        ]);
      }, 1000); // Simulate 1 second delay
    });
  }
  