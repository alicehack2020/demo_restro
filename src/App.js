 import './App.css';

function App() {
  return (
     <>
     <div className='main_div'>

     
      <div className='flex' >
     
      <div>
          <img className='main_image' src="https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74237.jpg?size=626&ext=jpg&ga=GA1.2.995736186.1656003020" alt="" />
      </div>

      <div>
          <h1>URU Brewpark</h1>
          <p>Contined,pizza,Asia,Desserts</p>
          <p>cost $ 600 for one</p>
          <div className='flex'>
             <h4>Min $50</h4>.<h4>Up to 30 min</h4>
          </div>
          
          <h4>Accepts online payement online</h4>
      </div>

      <div>
        <button>4.3</button>
        <p>766 votes</p>
        <p>512 reviews</p>
      </div>

      </div>


      <div className='order_div'>
        <div className='flex sub_div'>
          <p>Order Online</p>
          <span>&#8594;</span>
        </div>
      </div>

   </div>

     </>
  );
}

export default App;
