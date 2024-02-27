import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    backgroundColor: colors.white,
    width: '80%',
    padding: 20,
    borderRadius: 4,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  closeButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertical: 6,
    paddingHorizontal: 30,
  },
  closeButtonText: {
    color: colors.textPrimary,
  },
  confirmButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertical: 6,
    paddingHorizontal: 30,
    backgroundColor: colors.textPrimary,
  },
  confirmButtonText: {
    color: colors.white,
  },
  validationError: {
    color: colors.danger,
    textAlign: 'center',
  },
});
export default styles;
