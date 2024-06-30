import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryFilterProps {
  onFilterChange: (category: string) => void;
}

function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  return (
    <div>
      <div className='d-flex flex-column pt-4 mt-5'>
        <span className="fs-5 fw-bold ps-3">Category:</span>
        <div className='col pt-3' onClick={() => onFilterChange('Cosmetics')}>
          <Link href={'/Category/Cosmetics/cat_G6kVw7RWVl2eDx'} className='category-link ps-2'>
            <Image alt="category" src={'/cosmatics caty.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize: 'medium'}}>Cosmetics</span>
          </Link>
        </div>
        <div className='col-12 pt-3' onClick={() => onFilterChange('Furniture')}>
          <Link href={'/Category/Furniture/cat_LvJjoPakn5e0nO'} className='category-link ps-2'>
            <Image alt="category" src={'/Furniture caty.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize: 'medium'}}>Furniture</span>
          </Link>
        </div>
        <div className='col-12 pt-3' onClick={() => onFilterChange('Gift Cards')}>
          <Link href={'/Category/Gift Cards/cat_gnZO5kGeK57MNq'} className='category-link ps-2'>
            <Image alt="category" src={'/Giftcards catgy.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize: 'medium'}}>Gift Cards</span>
          </Link>
        </div>
        <div className='col-12 pt-3' onClick={() => onFilterChange('Computer Accessories')}>
          <Link href={'/Category/Computer Accessories/cat_eN1ql9ROdwz3ym'} className='category-link ps-2'>
            <Image alt="category" src={'/computer acce caty.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize: 'medium'}}>Computer Accessories</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter;
