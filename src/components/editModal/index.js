import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import styles from './style';
import Input from '../input';

const EditModal = ({
  visible,
  closeModal,
  setWillEditText,
  willEditText,
  onConfirm,
  hasError,
  errorMsg,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Update</Text>
          <Input
            value={willEditText}
            onChangeText={text => setWillEditText(text)}
            placeholder="Update todo"
          />
          {hasError && <Text style={styles.validationError}>{errorMsg}</Text>}
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.closeButtonWrapper}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={styles.confirmButtonWrapper}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
