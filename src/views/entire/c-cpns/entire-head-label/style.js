import styled from 'styled-components'

export const LabelWrapper = styled.div`
  position: relative;
  .active {
    background: ${(props) => props.theme.color.secondaryColor};
    color: #fff;
  }
  .box {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px 0 10px 16px;
    color: ${(props) => props.theme.text.primaryColor};
    .box-item {
      flex: 1;
      display: flex;
      .item {
        padding: 7px 12px;
        border: 0.5px solid #ddd;
        margin: 0 6px;
        font-size: 14px;
        border-radius: 3px;
        cursor: pointer;
        /* &:hover {
          background-color: #f2f2f2;
        } */
      }
    }

    .show-map {
      margin-right: 80px;
      font-size: 14px;
      .switch {
        margin-left: 10px;
        width: 48px;
        height: 32px;
        :where(
            .css-dev-only-do-not-override-sk7ap8
          ).ant-switch.ant-switch-checked
          .ant-switch-handle {
          inset-inline-start: calc(100% - 30px);
        }
        .ant-switch-handle::before {
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }
      }
    }
  }
`
