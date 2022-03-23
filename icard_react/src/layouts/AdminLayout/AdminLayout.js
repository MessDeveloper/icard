import React, { Children } from 'react'
import "./AdminLayout.scss";

export function AdminLayout(props) {
  const { Children } = props;

  return (
    <div>
      {Children}
    </div>
  )
}
