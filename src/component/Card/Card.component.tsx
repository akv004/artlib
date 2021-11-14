import styled, { css } from "styled-components";
import classNames from "classnames";


interface CardProps {
  className?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
  subheader?: React.ReactNode;
}

const Heading = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: ${(props) => props.theme.spacingM} ${(props) => props.theme.spacingM}
    ${(props) => props.theme.spacingBase} ${(props) => props.theme.spacingM};
`;

const _Card: React.FC<CardProps> = ({
  className,
  header,
  subheader,
  children
}) => {
  return (
    <div className={classNames("uitk-card", className)}>
      {header && <Heading className="uitk-card__header">{header}</Heading>}
    </div>
  );
};

export const Card = styled(_Card)`
  ${({ theme: { colorBackgroundLayout, dropShadowCard } }) => css`
    background-color: ${colorBackgroundLayout};
    box-shadow: ${dropShadowCard};
  `}
`;

export default Card;