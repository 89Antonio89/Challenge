import styles from "./FirstBlock.module.css";
//components
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
const FirstBlock = () => {
  const maintTitle = "Welcome";

  const carousel = [
    {
      id: 1,
      src: "/photos/caroussel1.jpg",
      title: "First Image",
      subtitle: "Caption",
    },
    {
      id: 2,
      src: "/photos/caroussel2.jpg",
      title: "Second Image",
      subtitle: "Caption",
    },
    {
      id: 3,
      src: "/photos/caroussel3.jpg",
      title: "Third Image",
      subtitle: "Caption",
    },
    {
      id: 4,
      src: "/photos/caroussel4.jpg",
      title: "Fourth Image",
      subtitle: "Caption",
    },
    {
      id: 5,
      src: "/photos/caroussel5.jpg",
      title: "Fifth Image",
      subtitle: "Caption",
    },
  ];
  //Using React-Bootstrap and some in-line css
  return (
    <div id="Welcome">
      <div className={styles.main}>
        <Container>
          <Row>
            <Col
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3>{maintTitle}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ac odio eu enim feugiat lacinia. Nam tristique, ex in mollis
                elementum, dui dui congue nisi, vel consectetur mi libero quis
                lacus. Phasellus a consectetur nunc. Sed non tellus augue. Nunc
                velit enim, euismod eu congue vel, bibendum vel turpis. Nam
                velit velit, pellentesque vel placerat quis, tempor a libero.
                Donec viverra nisi id libero molestie auctor. Sed a magna
                tellus. Integer euismod, lacus id bibendum molestie, justo
                ligula varius lacus, a commodo diam orci quis nibh.
              </p>
              <Link to="#Contacts">Learn More about us</Link>
            </Col>
            <Col xs={12} md={6}>
              <Carousel
                interval={null}
                variant="light"
                fade
                style={{ width: "90%" }}
              >
                {carousel.map((item) => (
                  <Carousel.Item key={item.id}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FirstBlock;
