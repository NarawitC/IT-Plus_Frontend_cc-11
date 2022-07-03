function BreadCrumbs({ Productname }) {
  return (
    <div>
      <div className='text-sm breadcrumbs  border-b-2  opacity-50'>
        <ul>
          <li>
            <a>หน้าหลัก</a>
          </li>
          <li>
            <a>คอมพิวเตอร์และโน๊ตบุ๊ค</a>
          </li>
          <li>
            <a>จอคอมพิวเตอร์ (Monitor)</a>
          </li>
          {Productname ? <li>{Productname}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumbs;
