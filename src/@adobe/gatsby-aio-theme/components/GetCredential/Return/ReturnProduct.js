import React from 'react';
import { css } from "@emotion/react";
import { ActionButton, Tooltip, TooltipTrigger } from '@adobe/react-spectrum';

const ReturnProduct = ({ productList }) => {
  return (
    <>
      {productList.map((product, index) => {
        if (index < 2)
          return (
            <div
              css={css`
                & > button {
                  border : none !important;
                }
              `}
            >
              {product?.icon ? (
                <TooltipTrigger delay={0}>
                  <ActionButton aria-label="Edit Name">
                    <img
                      src={product?.icon}
                      css={css`
                        width: 35px;
                        cursor: pointer;
                      `}
                    />
                  </ActionButton>
                  <Tooltip>{product?.label}</Tooltip>
                </TooltipTrigger>
              ) : (
                <p className="spectrum-Body spectrum-Body--sizeS">{product?.label}</p>
              )}
            </div>
          )
      })}
    </>
  )
}

export { ReturnProduct }