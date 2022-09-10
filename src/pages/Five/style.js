import { StyleSheet } from 'react-native';

export const FiveStyle = StyleSheet.create({
  supportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    paddingLeft: 24,
    paddingRight: 24

  },
  supportIconBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 150
  },
  supportIconShape: {
    height: 36,
    width: 36,
    backgroundColor: '#E8AE18',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  supportIcon: {
    height: 16,
    width: 16,
  },
  supportTitle: {
    fontFamily: 'Inter-Medium',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 16,
    color: '#FFFFFF',
    marginLeft: 8
  },
  supportSearchIcon: {
    height: 20,
    width: 20,
  },
  dialogBlock: {

  },
  dialogDate: {
    fontFamily: 'Inter-Medium',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 12,
    color: '#FFFFFF',
    opacity: .75,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 24
  },
  dialogBlockSupport: {

  },
  dialogSupport: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  dialogTextSupport: {
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#242424',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
    fontFamily: 'Inter-Medium',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    marginLeft: 8
  },
  dialogMeBlock: {
    paddingLeft: 64,
    paddingRight: 24,
    marginBottom: 32,
    flexDirection: 'row',
  },
  dialogMe: {
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#A6C100',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopStartRadius: 20,
    fontFamily: 'Inter-Medium',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  dialogMeCheck: {
    height: 8,
    width: 12,
  },
  inputEnterMsg: {
    paddingLeft: 16,
    height: 46,
    width: '70vw',
    backgroundColor: '#444444',
    borderRadius: 16,
    fontSize: 14,
    lineHeight: 14,
    color: '#FFFFFF',
    fontFamily: 'Inter-Medium',
    fontWeightL: 400,
    opacity: 0.5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    outlineStyle: 'unset',
  },
  enterBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 32,
    width: '100vw',
  },
  enterMsg: {
    position: 'relative',
    width: '70vw'
  },
  inputEnterMsgIcon: {
    height: 15,
    width: 15,
    position: 'absolute',
    right: 16,
    top: 15,
  },
  inputEnterMsgButton: {
    height: 46,
    width: 46,
    backgroundColor: '#A6C100',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 16
  },
  inputEnterMsgButtonIcon: {
    height: 14,
    width: 19,
  },
})