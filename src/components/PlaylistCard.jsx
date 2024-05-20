import styled from "@emotion/styled";

function PlaylistCard({data}) {

  console.log(data)
const Card = styled.div`
    width: 180px;
    height: 250px;
    border-radius: 10px;
    padding: 15px;
    background-color: #262626;
    cursor: pointer;
  `;

  const H4 = styled.h4`
    margin-top: 10px;
    font-size: 16px;
  `;
  const P = styled.p`
    margin-top: 10px;
    color: #b3b3b3;
    font-size: 14px;
  `;
  
  return (
      <Card>
        <img
          src={data?.images[0]?.url}
          alt=""
          style={{ borderRadius: "8px" }}
          width={150}
          height={150}
        />
        <H4>{data?.name}</H4>
        <P>{data?.description}</P>
      </Card>
  );
}

export default PlaylistCard;
