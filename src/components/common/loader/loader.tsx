import "./Loader.css";

interface LoaderProps {
 topPosition?: string
 spinner?: boolean;
}


const Loader = ({ spinner, topPosition}: LoaderProps) => {
 return (
   <div className={`${topPosition}`}>
     {spinner ? (
       <div className="">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
       </div>
     ) : (
       <div className="spinnercont flex justify-center items-center">
         <div className="spinner">
           <div className="bounce1" />
           <div className="bounce2" />
           <div className="bounce3" />
         </div>
         <p>Loading, please wait.</p>
       </div>
     )}
   </div>
 );
};


export default Loader;

