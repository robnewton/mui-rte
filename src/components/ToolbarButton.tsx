import React, { FunctionComponent } from 'react'
import { IconButton } from '@material-ui/core'
import { TToolbarComponentProps } from './Toolbar'

interface IToolbarButtonProps {
    id?: string
    label: string
    style: string
    type: string
    active?: boolean
    icon?: JSX.Element
    onClick?: any
    inlineMode?: boolean
    disabled?: boolean
    component?: FunctionComponent<TToolbarComponentProps>
}

const ToolbarButton: FunctionComponent<IToolbarButtonProps> = (props: IToolbarButtonProps) => {
    const size = !props.inlineMode ? "medium" : "small"
    const toolbarId = props.inlineMode ? "-toolbar" : ""
    const elemId = props.id + toolbarId
    const sharedProps = {
        id: elemId,
        onMouseDown: (e: React.MouseEvent) => {
            e.preventDefault()
            if (props.onClick) {
                props.onClick(props.style, props.type, elemId, props.inlineMode)
            }
        },
        disabled: props.disabled || false
    }
    if (props.icon) {
        return (
            <IconButton
                {...sharedProps}
                aria-label={props.label}
                color={props.active ? "primary" : "default"}
                size={size}
            >
                {props.icon}
            </IconButton>
        )
    }
    if (props.component) {
        return (
            <props.component 
                {...sharedProps}
                active={props.active || false}
            />
        )
    }
    return null
}

export default ToolbarButton