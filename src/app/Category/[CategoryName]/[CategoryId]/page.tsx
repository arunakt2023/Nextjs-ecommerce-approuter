import { ProductServices } from "@/app/Services/Product-Services";
import Image from "next/image";
import Link from "next/link";

async function CategoryProducts(props:any) {
    console.log("category page",props)
    const categoryId=props.params.CategoryId;
    const categoryName=await ProductServices.getCategory(categoryId);
    const data=await ProductServices.getProducts();
    const filteredProducts=data.filter((d:any)=>{
        return d.categories[0]?.slug === categoryName;
    })
    console.log("filterproducts",filteredProducts)

    return ( <>
    <div className="mt-4 mb-2 ps-5 fw-semibold fs-2 text-danger text-uppercase text-center">{categoryName}</div>
    <div className="d-flex flex-wrap justify-content-center gap-4  mb-5">
        {
            filteredProducts.map((fl:any)=>{
                return(
                    <Link href={'/Products/'+fl.id} style={{textDecoration:'none'}}>
                        <div className="card mb-3" style={{maxWidth:540}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img src={fl.image.url} className="img-fluid rounded-start mt-3" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{fl.name}</h5>
        <p className="card-text">{fl.description}</p>
        <p className="card-text fw-bold">${fl.price.raw}</p>
      </div>
    </div>
  </div>
</div>
                    </Link>

                )
            })
        }
    </div>
    </> );
}

export default CategoryProducts;