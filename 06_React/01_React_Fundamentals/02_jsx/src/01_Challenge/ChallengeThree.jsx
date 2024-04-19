const ChallengeThree = () => {
    function Item({ name, importance }) {
        return (
            <li className="item">
                {name}
                {importance > 0 && ''}
                {importance > 0 && (<i>{` ( importance: ${importance} ) `}</i>)}
                {/* {importance ? (<i>{` ( importance: ${importance} ) `}</i>) :''} */}
            </li>
        );
    }
    return (
        <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={9} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
    )
}
export default ChallengeThree;