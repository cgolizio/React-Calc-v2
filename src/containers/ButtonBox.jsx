import { Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const ButtonBox = ({ children }) => {
  return (
          <Grid
            minH="82vh"
            p={3}
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(5, 1fr)"
            gap={2}
          >
            {children}
            {/** ROW 1 */}
            {/* <GridItem>
              <Button variant="secondary">AC</Button>
            </GridItem>
            <GridItem>
              <Button variant="secondary">+/–</Button>
            </GridItem>
            <GridItem>
              <Button variant="secondary">‹‹‹</Button>
            </GridItem>
            <GridItem>
              <Button variant="highlight">÷</Button>
            </GridItem> */}

            {/** ROW 2 */}
            {/* <GridItem>
              <Button variant="primary">7</Button>
            </GridItem>
            <GridItem>
              <Button variant="primary">8</Button>
            </GridItem>
            <GridItem>
              <Button variant="primary">9</Button>
            </GridItem>
            <GridItem>
              <Button variant="highlight">X</Button>
            </GridItem> */}

            {/** ROW 3 */}
            {/* <GridItem>
              <Button variant="primary">4</Button>
            </GridItem>
            <GridItem>
              <Button variant="primary">5</Button>
            </GridItem>
            <GridItem>
              <Button variant="primary">6</Button>
            </GridItem>
            <GridItem>
              <Button variant="highlight">–</Button>
            </GridItem> */}

            {/** ROW 4 */}
            {/* <GridItem>
              <Button variant="primary">1</Button>
            </GridItem>
            <GridItem>
              <Button variant="primary">2</Button>
            </GridItem>
            <GridItem>
              <Button variant="primary">3</Button>
            </GridItem>
            <GridItem>
              <Button variant="highlight">+</Button>
            </GridItem> */}

            {/** ROW 5 */}
            {/* <GridItem colSpan={2}>
              <Button variant="primary">0</Button>
            </GridItem>
            <GridItem>
              <Button variant="primary">.</Button>
            </GridItem>
            <GridItem>
              <Button variant="highlight">=</Button>
            </GridItem> */}
          </Grid>
  )
}

export default ButtonBox