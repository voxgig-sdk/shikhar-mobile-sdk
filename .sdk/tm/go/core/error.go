package core

type ShikharMobileError struct {
	IsShikharMobileError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewShikharMobileError(code string, msg string, ctx *Context) *ShikharMobileError {
	return &ShikharMobileError{
		IsShikharMobileError: true,
		Sdk:              "ShikharMobile",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ShikharMobileError) Error() string {
	return e.Msg
}
