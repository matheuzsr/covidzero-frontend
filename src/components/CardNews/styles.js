import styled from "styled-components";

export const CardBoxStyle = styled.div`
    background: ${props => props.theme.colors.primary};
    color: #fff;
    font-size: 1em;
    padding: 1em;
    border: 1px solid ${props => props.theme.colors.primaryDark};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
`;

export const CardBoxTitle = styled.div`
    color: ${props => props.theme.colors.titleCard};
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
`;

export const CardBoxContent = styled.div`
    color: ${props => props.theme.colors.contentCard};
    font-size: 12px;
    margin: 8px 0;
    line-height: 18px;
`;

export const CardBoxFooter = styled.div`
    color: ${props => props.theme.colors.footerCard};
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    display: flex;
    justify-content: space-between;
`;

export const Style = { CardBoxStyle, CardBoxTitle, CardBoxContent, CardBoxFooter };