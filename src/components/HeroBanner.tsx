import React from 'react';

export interface HeroBannerProps {
  role?: 'candidate' | 'recruiter';
  className?: string;
}

/**
 * HeroBanner component hiển thị đồng bộ, chuẩn kích thước và tỷ lệ
 * trên cả 2 giao diện Ứng viên (SeekerView) và Nhà tuyển dụng (EmployerView),
 * đảm bảo 100% nội dung hình ảnh và câu chữ nguyên vẹn, không bao giờ bị cắt xén hay mất chữ.
 */
export const HeroBanner: React.FC<HeroBannerProps> = ({
  role = 'candidate',
  className = ''
}) => {
  return (
    <div
      className={`w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-sm transition-all border border-slate-200/90 bg-[#F0F5FC] flex items-center justify-center ${className}`}
    >
      <div className="relative w-full aspect-[1376/768] flex items-center justify-center">
        <img
          src="/Banner.jpg"
          alt={
            role === 'recruiter'
              ? 'Nối cơ hội - Đổi cuộc đời - Cổng Doanh Nghiệp Tuyển Dụng Trực Tiếp'
              : 'Nối cơ hội - Đổi cuộc đời - Cơ hội việc làm đang chờ bạn'
          }
          className="w-full h-full object-contain block select-none"
          loading="eager"
          decoding="async"
          onError={(e) => {
            // Dự phòng nếu Banner.jpg không tải được
            e.currentTarget.src = '/hero_banner.jpg';
          }}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
