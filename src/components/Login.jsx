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

const SignUp = styled.button`
  max-width: 600px;
  font-family: Roboto;
  color: white;
  background-color: #0014ff;
  width: 100%;
  letter-spacing: 3px;
  margin-bottom: 12px;
  font-size: 1.5em;
  padding: 17px 0;
  border: 1px solid transparent;
  border-radius: 8px;

  &:hover {
    background-color: #009eff;
  }
`;

const Description = styled.p`
  max-width: 600px;
  font-size: 1.1em;
  line-height: 1.3em;
  letter-spacing: 0.8px;
  margin: 5px 0 24px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
`;
const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Disney+ Hotstar currently offers over 100,000 hours of TV content
            and movies across 9 languages, and every major sport covered live.
            Highly evolved video streaming technology and a high attention to
            quality of experience across devices and platforms, make Disney+
            Hotstar the most complete video destination for Over The Top (OTT)
            video consumers.
          </Description>
          <CTALogoTwo src="images/cta-logo-two.svg" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
