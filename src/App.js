import Slot from './Slot';
import Top from './Top';  

const App = () => {
    return(
        <>
        <div className = 'mainContainer'>
            <Top />
        <div className = "allSlot">
        <div className="slots">
            <Slot x = "😈" y = "😈" z = "😈" />
            <Slot x = "😇" y = "💟 " z = "😇" />
            <Slot x = "😇" y = "😇" z = "😇" />
            <Slot x = "🎧" y = "😇" z = "😇" />
            <Slot x = "😇" y = "😇" z = "😇" />
      </div>
          </div>
        </div>
        </>
    )
}

export default App;