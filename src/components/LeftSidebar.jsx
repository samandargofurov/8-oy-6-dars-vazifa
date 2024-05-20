import styled from "@emotion/styled";

function LeftSidebar() {
  const Div = styled.div`
    width: 18%;
    background-color: black;
    color: white;
    padding: 18px;
    min-height: 100vh;
  `;

  return (
    <>
      <Div>left</Div>
    </>
  );
}

export default LeftSidebar;
