import React, { FC } from 'react';
import { useTheme } from '@grafana/ui';
import { Database } from 'shared/components/Elements/Icons/Database';
import { getStyles } from './AddInstance.styles';
import { instanceList } from './AddInstance.constants';
import { Messages } from './AddInstance.messages';
import { AddInstanceProps, SelectInstanceProps } from './AddInstance.types';
import { OverflowTooltip } from 'shared/components/Elements/OverflowTooltip/OverflowTooptip';

export const SelectInstance: FC<SelectInstanceProps> = ({ type, selectInstanceType, title }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <button
      className={styles.navigationButton}
      data-qa={`${type}-instance`}
      onClick={selectInstanceType(type)}
      type="button"
    >
      <Database />
      <b className={styles.addInstanceTitle}>
        <OverflowTooltip>{title}</OverflowTooltip>
      </b>
      <span className={styles.addInstance}>{Messages.titles.addInstance}</span>
    </button>
  );
};

const AddInstance: FC<AddInstanceProps> = ({ onSelectInstanceType }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const selectInstanceType = (type) => () => onSelectInstanceType({ type });

  return (
    <section className={styles.content}>
      <h3>Add instance</h3>
      <nav className={styles.navigationPanel}>
        {instanceList.map((item) => (
          <SelectInstance
            selectInstanceType={selectInstanceType}
            type={item.type}
            title={item.title}
            key={item.type}
          />
        ))}
      </nav>
    </section>
  );
};

export default AddInstance;
