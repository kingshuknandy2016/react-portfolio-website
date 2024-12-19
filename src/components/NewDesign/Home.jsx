import React from "react";
import { Box, Typography, Button, Grid, Paper, Link } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: 1152,
          height: 2041,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 248,
            height: 64,
            top: 210,
            left: 755,
          }}
        >
          <Box
            sx={{
              top: 13,
              left: 0,
              backgroundColor: "#edf7fa",
              borderRadius: "50%",
              position: "absolute",
              width: 243,
              height: 243,
            }}
          />
          <img
            style={{
              top: 0,
              left: 5,
              objectFit: "cover",
              position: "absolute",
              width: 243,
              height: 243,
            }}
            alt="Ellipse"
            src="ellipse-1.png"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            width: 208,
            height: 47,
            top: 477,
            left: 148,
            borderRadius: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Heebo-Medium",
              fontWeight: "medium",
              color: "white",
            }}
          >
            Download Resume
          </Typography>
        </Button>
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            width: 506,
            top: 227,
            left: 148,
            fontFamily: "Heebo-Bold",
            fontWeight: "bold",
            color: "dark-color",
          }}
        >
          Hi, I am Kingshuk,
          <br />
          Full Stack Lead
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: 497,
            top: 372,
            left: 148,
            position: "absolute",
            fontFamily: "Heebo-Regular",
            color: "dark-color",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: 132,
            height: 43,
            top: 26,
            left: 856,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Heebo-Medium",
              fontWeight: "medium",
              color: "black",
              textAlign: "right",
            }}
          >
            Works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Heebo-Medium",
              fontWeight: "medium",
              color: "black",
              textAlign: "right",
              marginLeft: 2,
            }}
          >
            Blog
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            width: 71,
            top: 26,
            left: 1021,
            fontFamily: "Heebo-Medium",
            fontWeight: "medium",
            color: "black",
            textAlign: "right",
          }}
        >
          Contact
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: 1152,
            height: 396,
            top: 595,
            left: 0,
            backgroundColor: "#edf7fa",
          }}
        >
          <Paper
            sx={{
              position: "absolute",
              width: 418,
              height: 295,
              top: 69,
              left: 148,
              backgroundColor: "white",
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                width: 374,
                top: 23,
                left: 23,
                fontFamily: "Heebo-Bold",
                fontWeight: "bold",
                color: "dark-color",
              }}
            >
              Making a design system from scratch
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: 395,
                height: 34,
                top: 125,
                left: 23,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  width: 239,
                  top: 0,
                  left: 156,
                  fontFamily: "Heebo-Regular",
                  color: "dark-color",
                }}
              >
                Design, Pattern
              </Typography>
              <img
                style={{
                  position: "absolute",
                  width: 1,
                  height: 21,
                  top: 1,
                  left: 130,
                }}
                alt="Vector"
                src="vector-1.svg"
              />
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  width: 374,
                  top: 0,
                  left: 0,
                  fontFamily: "Heebo-Regular",
                  color: "dark-color",
                }}
              >
                12 Feb 2020
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                width: 368,
                top: 170,
                left: 23,
                fontFamily: "Heebo-Regular",
                color: "dark-color",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Paper>
          <Paper
            sx={{
              position: "absolute",
              width: 418,
              height: 295,
              top: 69,
              left: 586,
              backgroundColor: "white",
              borderRadius: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                width: 374,
                top: 23,
                left: 23,
                fontFamily: "Heebo-Bold",
                fontWeight: "bold",
                color: "dark-color",
              }}
            >
              Creating pixel perfect icons in Figma
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: 395,
                height: 34,
                top: 125,
                left: 23,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  width: 239,
                  top: 0,
                  left: 156,
                  fontFamily: "Heebo-Regular",
                  color: "dark-color",
                }}
              >
                Figma, Icon Design
              </Typography>
              <img
                style={{
                  position: "absolute",
                  width: 1,
                  height: 21,
                  top: 0.5,
                  left: 130,
                }}
                alt="Vector"
                src="vector-2.svg"
              />
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  width: 374,
                  top: 0,
                  left: 0,
                  fontFamily: "Heebo-Regular",
                  color: "dark-color",
                }}
              >
                12 Feb 2020
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                width: 368,
                top: 170,
                left: 23,
                fontFamily: "Heebo-Regular",
                color: "dark-color",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Paper>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              height: 60,
              top: 1.5,
              left: 148,
              fontFamily: "Heebo-Regular",
              color: "dark-color",
            }}
          >
            Recent posts
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              width: 208,
              top: 26,
              left: 796,
              fontFamily: "Heebo-Regular",
              color: "secondary",
              textAlign: "right",
            }}
          >
            View all
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 1005,
            left: 148,
            fontFamily: "Heebo-Regular",
            color: "dark-color",
          }}
        >
          Featured works
        </Typography>
        <Box
          component="footer"
          sx={{
            position: "absolute",
            width: 1152,
            height: 182,
            top: 1859,
            left: 0,
            backgroundColor: "white",
          }}
        >
          <img
            style={{
              position: "absolute",
              width: 30,
              height: 30,
              top: 51,
              left: 459,
            }}
            alt="Fb"
            src="fb.svg"
          />
          <img
            style={{
              position: "absolute",
              width: 30,
              height: 30,
              top: 51,
              left: 661,
            }}
            alt="Linkedin"
            src="linkedin.svg"
          />
          <img
            style={{
              position: "absolute",
              width: 37,
              height: 30,
              top: 51,
              left: 589,
            }}
            alt="Group"
            src="group.png"
          />
          <img
            style={{
              position: "absolute",
              width: 30,
              height: 30,
              top: 51,
              left: 524,
            }}
            alt="Insta"
            src="insta.png"
          />
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              top: 106,
              left: 464,
              fontFamily: "Heebo-Regular",
              color: "dark",
              textAlign: "center",
            }}
          >
            Copyright ©2020 All rights reserved
          </Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 1076,
            left: 410,
            fontFamily: "Heebo-Bold",
            fontWeight: "bold",
            color: "dark-color",
          }}
        >
          Designing Dashboards
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: 462,
            height: 102,
            top: 1311,
            left: 410,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 337,
              height: 102,
              top: 0,
              left: 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                fontFamily: "Heebo-Bold",
                fontWeight: "bold",
                color: "dark-color",
              }}
            >
              Vibrant Portraits of 2020
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: 62,
                height: 25,
                top: 61,
                left: 0,
                backgroundColor: "#142850",
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: 42,
                left: 2.5,
                fontFamily: "Heebo-Black",
                fontWeight: "black",
                color: "white",
              }}
            >
              2018
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              width: 374,
              top: 14,
              left: 88,
              fontFamily: "Heebo-Regular",
              color: "light",
            }}
          >
            Illustration
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 462,
            height: 99,
            top: 1559,
            left: 410,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 365,
              height: 99,
              top: 0,
              left: 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                fontFamily: "Heebo-Bold",
                fontWeight: "bold",
                color: "dark-color",
              }}
            >
              36 Days of Malayalam type
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: 62,
                height: 25,
                top: 58,
                left: 0,
                backgroundColor: "#142850",
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: 39,
                left: 2.5,
                fontFamily: "Heebo-Black",
                fontWeight: "black",
                color: "white",
              }}
            >
              2018
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              width: 374,
              top: 53,
              left: 88,
              fontFamily: "Heebo-Regular",
              color: "light",
            }}
          >
            Typography
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: 374,
            top: 1136,
            left: 498,
            fontFamily: "Heebo-Regular",
            color: "light",
          }}
        >
          Dashboard
        </Typography>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: 594,
            top: 1187,
            left: 410,
            fontFamily: "Heebo-Regular",
            color: "dark-color",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: 594,
            top: 1418,
            left: 410,
            fontFamily: "Heebo-Regular",
            color: "dark-color",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            width: 507,
            top: 1678,
            left: 413,
            fontFamily: "Heebo-Regular",
            color: "dark-color",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: 62,
            height: 60,
            top: 1122,
            left: 410,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 62,
              height: 25,
              top: 19,
              left: 0,
              backgroundColor: "#142850",
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: 0,
              left: 2.5,
              fontFamily: "Heebo-Black",
              fontWeight: "black",
              color: "white",
            }}
          >
            2020
          </Typography>
        </Box>
        <img
          style={{
            position: "absolute",
            width: 858,
            height: 1,
            top: 1282,
            left: 146,
            objectFit: "cover",
          }}
          alt="Vector"
          src="vector-8.svg"
        />
        <img
          style={{
            position: "absolute",
            width: 858,
            height: 1,
            top: 1528,
            left: 146,
            objectFit: "cover",
          }}
          alt="Vector"
          src="vector-12.svg"
        />
        <img
          style={{
            position: "absolute",
            width: 858,
            height: 1,
            top: 1776,
            left: 146,
            objectFit: "cover",
          }}
          alt="Vector"
          src="vector-13.svg"
        />
        <img
          style={{
            position: "absolute",
            width: 246,
            height: 180,
            top: 1088,
            left: 146,
            objectFit: "cover",
          }}
          alt="Rectangle"
          src="rectangle-30.png"
        />
        <img
          style={{
            position: "absolute",
            width: 246,
            height: 180,
            top: 1314,
            left: 146,
            objectFit: "cover",
          }}
          alt="Rectangle"
          src="rectangle-32.png"
        />
        <img
          style={{
            position: "absolute",
            width: 246,
            height: 184,
            top: 1560,
            left: 146,
            objectFit: "cover",
          }}
          alt="Rectangle"
          src="rectangle-34.png"
        />
      </Box>
    </Box>
  );
};

export default Home;
