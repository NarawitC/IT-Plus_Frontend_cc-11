function Header({ text, children }) {
  return (
    <>
      <div className='font-size-24 font-text-primary font-weight-500'>
        &lt;{text}/&gt;
      </div>
      <div className='bg-primary' style={{ height: '0.2rem' }}></div>
      <div className='d-flex flex-column gap-1'>
        {children}
        <hr />
      </div>
    </>
  );
}

export default Header;
