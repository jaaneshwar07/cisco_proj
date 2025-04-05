function Exhibit({ heading, children }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
        <h2>{heading}</h2>
        {children}
      </div>
    );
  }
  
  export default Exhibit;
  