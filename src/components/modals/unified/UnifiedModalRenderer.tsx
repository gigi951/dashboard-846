
import React from 'react';
import { useUnifiedModalContext } from './UnifiedModalProvider';
import { PDFViewerModal } from '../specialized/PDFViewerModal';
import { ComparisonModal } from '../specialized/ComparisonModal';
import { FilterModal } from '../specialized/FilterModal';
import { ExportModal } from '../ExportModal';
import { ImportModal } from '../ImportModal';
import { FeedbackModal } from '../FeedbackModal';
import { AdvancedSearchModal } from '../AdvancedSearchModal';
import { ManagementModal } from '../ManagementModal';
import { AlertManagementModal } from '../AlertManagementModal';
import { UserManagementModal } from '../UserManagementModal';

export function UnifiedModalRenderer() {
  const { modals, closeModal } = useUnifiedModalContext();

  return (
    <>
      <PDFViewerModal
        isOpen={modals.pdfViewer?.isOpen || false}
        onClose={() => closeModal('pdfViewer')}
        data={modals.pdfViewer?.data || { title: 'Document PDF' }}
      />
      
      <ComparisonModal
        isOpen={modals.comparison?.isOpen || false}
        onClose={() => closeModal('comparison')}
        data={modals.comparison?.data || { items: [] }}
        onExport={(items) => {
          console.log('Export comparison:', items);
        }}
      />
      
      <FilterModal
        isOpen={modals.filter?.isOpen || false}
        onClose={() => closeModal('filter')}
        data={modals.filter?.data || { type: 'general' }}
        onFiltersApply={(filters) => {
          console.log('Filters applied:', filters);
        }}
      />

      <ExportModal
        isOpen={modals.export?.isOpen || false}
        onClose={() => closeModal('export')}
        data={modals.export?.data || { data: [], filename: 'export' }}
      />

      <ImportModal
        isOpen={modals.import?.isOpen || false}
        onClose={() => closeModal('import')}
        acceptedTypes={modals.import?.data?.acceptedTypes || ['.csv', '.xlsx']}
      />

      <FeedbackModal
        isOpen={modals.feedback?.isOpen || false}
        onClose={() => closeModal('feedback')}
        data={modals.feedback?.data || { type: 'feedback' }}
      />

      <AdvancedSearchModal
        isOpen={modals.advancedSearch?.isOpen || false}
        onClose={() => closeModal('advancedSearch')}
        data={modals.advancedSearch?.data || {}}
      />

      <ManagementModal
        isOpen={modals.management?.isOpen || false}
        onClose={() => closeModal('management')}
        data={modals.management?.data || { type: 'domain' }}
      />

      <AlertManagementModal
        isOpen={modals.alertManagement?.isOpen || false}
        onClose={() => closeModal('alertManagement')}
        alert={modals.alertManagement?.alert}
        onSave={(alertData) => {
          console.log('Alert saved:', alertData);
          closeModal('alertManagement');
        }}
      />

      <UserManagementModal
        isOpen={modals.userManagement?.isOpen || false}
        onClose={() => closeModal('userManagement')}
        user={modals.userManagement?.user}
        action={modals.userManagement?.action || 'create'}
        onSave={(userData) => {
          console.log('User saved:', userData);
          closeModal('userManagement');
        }}
      />
    </>
  );
}
