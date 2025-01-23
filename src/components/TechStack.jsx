
import { useGLTF } from '@react-three/drei'

const TechStack = (props)=> {
  const { nodes, materials } = useGLTF('/models/3d_clipartwebdev.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.009}>
        <group position={[119.344, 0, 281.843]} rotation={[-Math.PI / 2, 0, 1.29]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gears_light_green_0.geometry}
            material={materials.light_green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gears_light_blue_0.geometry}
            material={materials.light_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gears_blue_0.geometry}
            material={materials.blue}
          />
        </group>
        <group position={[-119.937, 7.508, -156.045]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_001_Material013_0.geometry}
            material={materials['Material.013']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_001_Material012_0.geometry}
            material={materials['Material.012']}
          />
        </group>
        <group position={[119.937, 7.508, -156.045]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_001_Material014_0.geometry}
            material={materials['Material.014']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_001_Material015_0.geometry}
            material={materials['Material.015']}
          />
        </group>
        <group position={[-117.015, 135.8, -207.061]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material011_0.geometry}
            material={materials['Material.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material009_0.geometry}
            material={materials['Material.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material006_0.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material008_0.geometry}
            material={materials['Material.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material010_0.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material007_0.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material005_0.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group position={[122.86, 135.8, -207.061]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_002_Material019_0.geometry}
            material={materials['Material.019']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_002_Material018_0.geometry}
            material={materials['Material.018']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_002_Material021_0.geometry}
            material={materials['Material.021']}
          />
        </group>
        <group position={[186.6, 117.896, -197.759]} rotation={[-0.381, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_1_0.geometry}
            material={materials.graph_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_2_0.geometry}
            material={materials.graph_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_3_0.geometry}
            material={materials.graph_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_4_0.geometry}
            material={materials.graph_4}
          />
        </group>
        <group position={[85.187, 113.497, -197.283]} rotation={[-0.372, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_3002_0.geometry}
            material={materials['graph_3.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_2002_0.geometry}
            material={materials['graph_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_4002_0.geometry}
            material={materials['graph_4.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_gray_0.geometry}
            material={materials.gray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_1002_0.geometry}
            material={materials['graph_1.002']}
          />
        </group>
        <group position={[0, -5.41, -143.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.laptop_screen_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.laptop_screen_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.laptop_screen_Material003_0.geometry}
            material={materials['Material.003']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JS_text001_0.geometry}
          material={materials['text.001']}
          position={[376.682, -7.091, 50.928]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HTML_text002_0.geometry}
          material={materials['text.002']}
          position={[-462.212, 33.56, -281.908]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CSS_text_0.geometry}
          material={materials.text}
          position={[-355.475, -11.127, -14.417]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lines_line_0.geometry}
          material={materials.line}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Wi-Fi_Material022_0'].geometry}
          material={materials['Material.022']}
          position={[-77.384, 336.624, -298.406]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['@_Material025_0'].geometry}
          material={materials['Material.025']}
          position={[-106.489, 0, 272.375]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['<>_text001_0'].geometry}
          material={materials['text.001']}
          position={[171.163, 322.3, -327.784]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Window_1_detail_003_blue001_0.geometry}
          material={materials['blue.001']}
          position={[28.527, 240.411, -246.21]}
          rotation={[-0.376, 0, -0.494]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Window_1_detail_004_Material020_0.geometry}
          material={materials['Material.020']}
          position={[66.786, 189.097, -228.092]}
          rotation={[-0.377, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.laptop_body_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-3.483, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.laptop_key_bord_Material_0.geometry}
          material={materials.Material}
          position={[3.085, -4.808, -34.784]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/3d_clipartwebdev.glb')

export default TechStack;