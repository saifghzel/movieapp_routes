import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutUser } from "../redux/action";
import LikedMovie from "./LikedMovie";

const Entete = ({
  searchText,
  handleSearchChange,
  category,
  handleCategory,
}) => {
  const { LoggedUser, isAuth } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        top: 0,
        width: "100%",
      }}
    >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAAB1CAMAAAAYwkSrAAAAkFBMVEX////YHybXFh7jaW3VAADWAAnWABDYGSH+/Pzwvr/++fnfWl7gVlrdRkrtpaf+9PTsoKPgZGfXCxb77u7ohIfoiIvhYGTkfX/vsrT10dLXCRX419j54OHeT1P0ysvcPULjcHPZKjD76en2z9Dvq63ql5npj5Lzw8XbNDrcQUbkd3rjbXHwtrjbLDPrlJfcNjyFl7r9AAAMr0lEQVR4nO2d6XqiMBSGkbKotVWhbogb2rqMbe//7oZFMcn5QgLT6TKT7+mvcgJJXgknyUli3QkadyysMbHciibdiWij0nDHJB8M6yYv8rFncjCqfY/77i15RyzkcCSpDYnI4+/bvEFCqpHLP1+d1PbuZNmContJcle0dAja/jEQjRRy2QqZeDVTX/IxZcq4qJsD2+nfkj86wsWop8XpqnYvEu8uAOv2SAajseRuJDfp7XZWiyjGyQPRzqXAHnx6u0oFHDDyCC15LLCeXTc5C2znCRdt2c8Xq30vPl4EZu1ckgN7ju/2TmvTDykwb4CTG2BqaQALW6SOItzuLh2S1+BkUWD+EWfGAFNLAxgopb/qo5utaVHsLQDWsmcwMwaYWjrAwIvjIbcjAW3nwkLAoheYGQNMLR1g1oFUEnzKS0Sy6p4tBKxlw8wYYGppARuID0kbRero9SlXfxVaEJi7RJkxwNTSAhbSNjF6JlZT2iIWTR8oQjBBmTHA1NICZo1JHv0NMSJ3SjOTv4eoDAF4igGmIT1gHdomErdjRuvCXudXUBkoCssA05EeMIt2xexfgsmJ1oVTfKlQGS4seRlgamkCG1EH0OG7YsmGuhzH4la4DkBPzgBTSxPYnGbSe+QsHkGrebHAdfBIn2KAqaUJzFpQt+PIGb7SinQvswqwEPaYPscAU0sXGPDZHXZ8aU/bzNJ1x6UIaE/OAFNLF1hIe8VcXwr49M51SF9SCbQn1wxY4FXKeWKSnxxynf4AbHqPamBRdQ68rwCGRoA3YXk1oV1r++F6kcLKry+64jMaAQsmu8cqDdhBlf1AvLwjN7TvyA0HzHQSAPZcmYE0OVPSTwM2o22ie5t8f6MtYnSuBtaKyKRaI2CubPpbU0OxApA7xIgC8+HUhUSfBgz8sOwymqDtU59+U/6sJMCCJ/EZ3wSYZHpVWhF+WJmA16cBQyPA3vUdAS6J91amhLjScr6Lv0wDTC19YCF1K65uRxs5TjcnENHKFIlVbYCppQ8MjD35hyKrc+By3N0SYlwpb3F0ywBTqwYwNPFcOBagd+MxvhmklUtoEw0wtWoAQxPPWQQAGkbkfHYJrZJ3KQNMrTrAnqnvnse7IXeEdY0hrDy1EENpgKlVBxjoHWdTyl06+OC32DJgWvmz+DbRAFOrDjAwAtwKLGtPfXq+iwVZFXXD91ENMLVqAQMTz2mVomFEbmAXsioyu+Dub4CpVQtYF0w8D2MwesrH3mNYxcM4sgaYWrWAWU/A7TiBF4yvZ4iqEB98ZYCpVQ8YmHhu0X/5LT4VInU1fWCH7A0wteoBQ24HlRizWGXrsEP2BphaNYGBpUdUbsInqrLl/EkDTK2awBIQuiHKHgqJqoz9d6a0BphaNYGh6ENRgRg3X2nN1rcBplZdYGDiWcw+Wa1Xac4GpBpgatUF1lW6Hd5OTFNp7r/evngGmFp1gaGRXj73h0RMUp3AvUUkGWBq1QaWKIDRSA0FMGbI/qcC+5ZBOKXAQmZWNBZKAYwJJvipwKYdrDNI/vnA9nSShX082MKjyp6roEbAvMd4ftV2mWlfVBdc5En158CkoawOSP75wMDSIzY1+L1XmGfy36+Gfxqq7dtBJs/N5GjuMPMBwKSVAZJ/ATAQNHqrsiNoz1XlKlvRD42tR+860r8PLK5oE0HAvAaw6yYQBphaDYBZD/Ice8jDVZXL9y+GBphaTYBNpW1itlERlbpgF//AAFOrCbC+1O1wyP6GmZQFu/bdDDC1mgCTLou7+Xuc1CWzi2lMA0ytRsDADg9FUafQXF0yt+hiGmBqNQImmXj2W2SJXi5al3dCrV82gTDA1GoGDGwZ0ILDiLmAoVhLxfipAaZWM2Agmj6VL9mnlBgGL1Mh28ViTgNMrWbArDX4ikmfTCyDUVfofBe1a4Cp1RDYFkw8w+2jMhHLtO0Uv4L5JhAGmFoNgS0pMDiMmIuYpsDENjFfYWuAqdUQGN2PD+55WYhYpsBCAY6/aBtgOmoGbI46YpKNfDEwsoQimP1cYL5E3wcYDHbzV5KUxDIDdhYynu2s/gfAaG0FmhXxAcAeJDqA5F8CDHv1rUAyWU8Nn+g9/EO3KbB8k5BN+nc4MrV1hAPRVB8QIoDHC7C+BNgzDsQhuwJcBIGRz2C0bBgiMA3Dvs53V6J/PWoqyzJ+wVIQ2E/EwDqCo2nf/dggnO8OTHTJb0UlMaS5MLBE3JQgssjHwQAjagIMHIlzyfkK2mNgJF7O2xNDA4yoATCwwUqZFnbFiFkBTFzMbq+JoQFG1AAYKeFNuCtGzApgYM9MUQYYUX1gVUFT/gbuoS7qMg+j3s/VACOqDwwcicMkRrVHrC7AKtrWKwwDTFRtYP3KkTR4fgCxugDrKpdzGmBEH73cKCCLjeTArJGqTTTAiOoC6x+r3wpUWmJ0BbZVtYkGGFFdYOL4hCi7RwfWiFEZ/CEbMilhGGCi6gIDG0vx0lkfVgJTtYkGGFFNYLKIRADjJrmNqk00wIhqAvulBMZtvFGI2Nygmjfs7wKLq+tXUsnE5AasslNngAHVA6ao3yIDZOUjMbkBUzSxBhhRLWDyZSucxBFgYsB856rHEw0wolrAdhovWOonigUmFgyw6nfWACOqBUzVbbrk/1VIRiwYYGgHRgaGASaqDjC04YP9CA4ZEJb1EQPW9a8MWzPAiOoAA9GjwcmiBxuJp2rTVAwwSUDPBYYBJqoGMDQRFszhAbR8QpqKARZXtYkGGFENYGC+MXPhwVfI5VdikussMHgyUnkjA0yUPrAEVGx+XDpdjqnaBp0bvqqar/kfgLU29+Phr9Pk6eV5d97P53EcJ2G/K3tt9IGBj02xJzaIenO4WTFymQMWV/SdGwBrd/thmCRJvN2fd4O30WSNY+9KfTmwlp0q23Ip8lzXcQN/c1g9LO7v1pPR866zFSYYtYH1V9SdK4pGAgzFfbVJOg5YG62EucLQAdaxut1+vO1MB88pnvHieNjYnuM4rutFURA4koW8V309MCLf9wuIKUKnx/PQBgZOTbxuJgpOgntgY4BJQn5Ev6JN1AHmrw4tN+PjeSke284WQnAPG4n34PUNgbESDyjXBoYOyrm47zPqPnI7rNCEHLBQPseitRiC9iv4h/2fwJbgOW4sKwK/hxGtQ76Vkgc6fvhJ6UD/KDDwobkdc0l3gfA3zLeS1iEPTF4GA6wpsDmoplsMIjiAll0XQS4KwORtogHWFBjoNPvHW7gNdTvYWTFah4LjJvUTDbCGwFD0KHu6HojhZXZZIddEYNL1SwZYQ2CPYNbKZePZaAwvsy6C1qEArC9rEw2whsDATDNf6fQAWv+1vI8irSUPnjPAmgE7gzfA5QIB0AG0pU9CLhFg4pYC5UMMsEbAwIC6GGpDTW4jwLQORWChJFjEAGsEbA5esEgYIwcH0DrXcpArNNhU0nf+EcB8+7sBA9uokNXMYGeB0o2kdUiAAd6ZviWwhWdzCoJvBiwB8x/CidmpnugI8PUgMVqHBJhk+exnALt3mFHjTG41MGs+E1Vnl5BHJ5tCyJ5HhqmhGgADkWjgzCkw8Xw9kJTWIZ3x+AXbxI8A5imALc+dzn6/3M7KE1zAErePU/w4eBmNRpP1sLdYHVp2PtHguvlZLZffDZf9+sBCsMuDGGaTiQ7nB5euGE1OgYH9/FqNgflpOxVlc0mp7Fd0WMV3UjuM59t957zbDUan4WK1CbJ8X6eLovu6wNDBsgHY3oFOmF03bdYBFoL50RrA8im/IPAySG7rfTGcvA1252Vc52Svb6R+Ml+ed4Pnt8n6flITWBfUkI02lQITz06xu7kOMLylQBWwYlo2n5R1gs1qMT49vQym+3nYlwdE/EC1hbK0e9xkLQW2B16NA4/molV+AasFDG4pAIAd8/OmHM/fvD/0huunt11nFifJH+0P9qOUJPGsMx28PZ3ueg+HVtp+8iUHo0b2Au43Bw6g9fPvtxYwFDOCgN2NT6PBeTmP4+S/YSRTu5/E8zkfU7h1AtFvuexZTgQOoC26NFrA6PJZ3w4c2b7PRjLFg8n4uGn56fc8JXd5wyQbOtJomuJd1AN2XT7rX75Lzuv4ZfpXPex/WOF82dmNxqu0wfQiR9axCennzptZusDar24WnGavxk+57/AXi/MfqTs/P99Lf/Z0DCsPxtEDZnWep8v4f/8sfa6op+cfQm1gRp+vTfmdK9vEMw8s6zxFDhgoMfoKdX713m03YvxKe3EFljoTnue/Hnvrl53sSAKjz1cS79/uHl5t1yuw2bFlR15ktzaLyW75dwdWjRorme0H64dN2htwBtZpcDZe389Qym03+g1gJkuR+wegWwAAAABJRU5ErkJggg=="
              alt=""
              height={"50px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Nav>
                  <Link
                    style={{
                      textDecoration: "none",
                      margin: "0px 10px",
                      color: "gray",
                    }}
                    to="/films"
                  >
                    Home
                  </Link>
                </Nav>
                {isAuth && LoggedUser.role === "admin" && (
                  <Nav>
                    <Link
                      style={{
                        textDecoration: "none",
                        margin: "0px 10px",
                        color: "gray",
                      }}
                      to="/addmovie"
                    >
                      Add Movies
                    </Link>
                  </Nav>
                )}
              </div>
            </Nav>

            {isAuth && (
              <>
                <Nav>
                  <Form.Select
                    style={{ width: "200px" }}
                    aria-label="Category select"
                    onChange={(e) => handleCategory(e.target.value)}
                  >
                    <option value="all">All categories</option>
                    <option value="SF">Science Fiction</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="kids">Kids</option>
                    <option value="horror">Horror</option>
                  </Form.Select>
                </Nav>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchText}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </>
            )}
            {isAuth ? (
              <div>
                <Button
                  variant="danger"
                  onClick={(e) => dispatch(LogoutUser())}
                >
                  Logout
                </Button>
                <LikedMovie />
              </div>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
