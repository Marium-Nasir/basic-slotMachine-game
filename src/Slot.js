
const Slot = (props) => {
  let {x,y,z} = props;
  if((x === y && y === z)){
    return (
      <>
          <div className="eachslot">
              <h2>{x}{y}{z}</h2>
              <h3>This is Matching</h3>
          </div>
      </>
    );
  }else{
    return (
      <>
          <div className="eachslot">
              <h2>{x}{y}{z}</h2>
              <h3>This is not Matching</h3>
          </div>
      </>
    );
  }
};

export default Slot;
