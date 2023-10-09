import './App.css';
import Fruits from './Fruits';

const data = [
  {id: 1, img: 'https://yuz.uz/file/news/5ea8628e327407e62b43646fdc6e4915.jpg',
   title: 'Apple', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SgsNg8L4_0SFiIVMQ-5MsytC2dI8l3-UUg&usqp=CAU',
   title: 'Apricot', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 3, img: 'https://www.thedailymeal.com/img/gallery/13-delicious-things-you-can-make-with-bananas/intro-1673458653.jpg',
   title: 'Banana', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujjpE3ppUvLqi1pMemHmK5nlStgZfXf_98A&usqp=CAU',
   title: 'Kiwi', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-yxXaoCtDHdYef1vGT0K2Nrml008Glw6tg&usqp=CAU',
   title: 'Pomogrenate', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbY4dRxtto96W-TnDtrzTHxLX3Ac1KBfvmTw&usqp=CAU',
   title: 'Grapes', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvr6lHPcJnbC5X4IeHqsEEyINPYdeV1IT1A&usqp=CAU',
   title: 'Orange', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98scr6ghMEYd1lU3CeZ6DWenvdlGA6LgrFg&usqp=CAU',
   title: 'Ananas', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0c1zF2n8X6e_PfUCEnvz1xBhGio8A1QwHHw&usqp=CAU',
   title: 'Mandarin', uom: '02', size: '02', unit: '$8.99', total: '$17.89'},
  {id: 10, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmefNl3xJ327CmcU9cxNsvT1goXn5TBXiGnw&usqp=CAU',
   title: 'Fig', uom: '02', size: '02', unit: '$8.99', total: '$17.89'}
]

function App() {
  return (
    <div className="container">
      {
        data.map((value, index) =>{
          return (
              <div><Fruits data = {value} /></div>
          )
        })
      }
    </div>
  );
}
export default App;