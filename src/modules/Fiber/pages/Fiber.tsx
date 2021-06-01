import React, { FC, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ButtonGroup, Button } from "@material-ui/core";
import styles from "./styles.module.scss";

const Fiber: FC = () => {
  const myMesh = useRef();
  const [vertical, setVertical] = useState(false);
  const [horizontal, setHorizontal] = useState(false);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const onVerticalHandler = () => {
    setVertical((prevCheck) => !prevCheck);
  };

  const onHorizontalHandler = () => {
    setHorizontal((prevCheck) => !prevCheck);
  };

  function MyRotatingBox() {
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      if (vertical) {
        // @ts-ignore
        myMesh.current.rotation.x = a;
      }

      if (horizontal) {
        // @ts-ignore
        myMesh.current.rotation.y = a;
      }
    });

    return (
      <mesh
        ref={myMesh}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxBufferGeometry />
        <meshPhongMaterial color={hovered ? "hotpink" : "royalblue"} />
      </mesh>
    );
  }

  return (
    <div className={styles.root}>
      <ButtonGroup size="large" color="primary">
        <Button
          variant={vertical ? "contained" : "outlined"}
          onClick={onVerticalHandler}
        >
          Vertical
        </Button>
        <Button
          variant={horizontal ? "contained" : "outlined"}
          onClick={onHorizontalHandler}
        >
          Horizontal
        </Button>
      </ButtonGroup>
      <Canvas>
        <MyRotatingBox />
        <ambientLight intensity={0.5} />
        <directionalLight />
      </Canvas>
    </div>
  );
};

export default Fiber;
