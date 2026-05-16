package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAuthenticationEntityFunc func(client *ShikharMobileSDK, entopts map[string]any) ShikharMobileEntity

