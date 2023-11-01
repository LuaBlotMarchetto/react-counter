const Counter = (props) => {
  return (
    <section>
      <div>
        {props.counter>0 ? <button
          onClick={() => {
            props.setCounter(props.counter - 1);
          }}
        >
          -
        </button> }
        
        <p className={props.className}>{props.counter}</p>
        <button
          onClick={() => {
            props.setCounter(props.counter + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          props.setCounter(0);
        }}
      >
        Reset
      </button>
    </section>
  );
};

export default Counter;
