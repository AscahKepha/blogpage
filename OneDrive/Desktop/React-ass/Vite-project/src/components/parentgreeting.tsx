import Greeting from './greeting'


function Parentgreeting(){
    return (
        <div className='A'>
            <Greeting name= "Alice" timeOfDay="morning"/>
            <Greeting name= "Ascah" timeOfDay="Afternoon"/>
        </div>
    );
}
export default Parentgreeting;