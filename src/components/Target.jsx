import { useGLTF } from "@react-three/drei"

const Target = () => {

    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

  return (
    <div>Target</div>

  )
}
export default Target