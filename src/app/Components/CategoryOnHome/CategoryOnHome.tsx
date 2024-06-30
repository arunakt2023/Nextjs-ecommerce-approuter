import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryOnHome = () => {
  return (
    <div className="container-fluid bg-light bg-gradient">
      <div className="d-flex flex-column align-items-center">
        <span className="fs-4 fw-bold text-primary mb-4"></span>
        <div className="row w-100">
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Cosmetics/cat_G6kVw7RWVl2eDx'} className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/cosmatics caty.jpg'} width={120} height={100} className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Cosmetics</span>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Furniture/cat_LvJjoPakn5e0nO'} className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/Furniture caty.jpg'} width={100} height={80} className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Furniture</span>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Gift Cards/cat_gnZO5kGeK57MNq'} className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/Giftcards catgy.jpg'} width={100} height={80} className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Gift Cards</span>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Computer Accessories/cat_eN1ql9ROdwz3ym'} className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/computer acce caty.jpg'} width={100} height={80} className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Computer Accessories</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryOnHome;
