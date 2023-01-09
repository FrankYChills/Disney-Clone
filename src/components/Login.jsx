import styled from "styled-components";

const Container = styled.section`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  /* background-color: blue; */
  margin-bottom: 10vw;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  position: absolute;
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  /* background-color: red; */
  max-width: 650px;
  margin-bottom: 2vw;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%; //100% of parent component but bounded by max-width
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%; //100% of parent component but bounded by max-width

  display: block;
`;

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="images/cta-logo-one.svg" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
