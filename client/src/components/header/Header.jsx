import { CarouselMain } from "./CarouselMain"

export function Header (){


    return(
        <section className="mt-5">
        <div className="container  py-5 my-5">
            <div className="row align-items-center ">
                <div className="col-md-6 mb-5 mb-md-0  text-start text-light">
                    <h1 className=" text-title-main fw-bolder "><spam className="">SpaceOfCoder: tus mejores artículos y tutoriales de programación.</spam></h1>
                    <p className="fs-5  text-light"> Un lugar para compartir y crear con gente amante de la tecnología.</p>
                </div>
                <div className="col">
                    <CarouselMain/>
                </div>
            </div>
        </div>
    </section>
    )
}