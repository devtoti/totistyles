import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import { bodyData } from '../../components/bodydata'

export default function Project() {
  const router = useRouter()
  const { pid } = router.query
  console.log('pid is ' + pid)



  const displayBodyData = Object.keys(bodyData).map((key,id) => {
    console.log(key, bodyData[key])

      let keyToInches = bodyData[key] / 2.54 
  
    return <div className="measurement" key={id}>
    <h3>{key}</h3>
    <p>{bodyData[key]} {isNaN(keyToInches) ? null : '/ ' + keyToInches.toFixed(1) + '"'}</p>
    </div>
  })



  return (
    <div>
      <Gallery fetch={pid} />
      <div className="bodyMeasurements">
      {displayBodyData}
    </div>
    <Footer />
    </div>
  )
}


 export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
  }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { ... } }
//     ],
//     fallback: true // false or 'blocking'
//   };
// }